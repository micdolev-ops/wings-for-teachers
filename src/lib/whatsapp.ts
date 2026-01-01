export const WHATSAPP_PHONE = "972545567227";

export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const getWhatsAppUrl = (text?: string): string => {
  const baseUrl = isMobileDevice()
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";
  
  const params = new URLSearchParams({ phone: WHATSAPP_PHONE });
  if (text) {
    params.append("text", text);
  }
  
  return `${baseUrl}?${params.toString()}`;
};
