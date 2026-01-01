export const WHATSAPP_PHONE = "972545567227";

type UAData = { mobile?: boolean };

export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  // Prefer modern, reliable detection when available
  const uaData = (navigator as unknown as { userAgentData?: UAData }).userAgentData;
  if (typeof uaData?.mobile === "boolean") return uaData.mobile;

  // Fallback to UA regex
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const getWhatsAppUrl = (text?: string): string => {
  const baseUrl = isMobileDevice()
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";

  const params = new URLSearchParams({ phone: WHATSAPP_PHONE });
  if (text) params.append("text", text);

  return `${baseUrl}?${params.toString()}`;
};
