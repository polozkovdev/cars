export const getLocale = () => {
  return Intl.DateTimeFormat([], { hour: "numeric" }).resolvedOptions().locale;
};
