export const EnumMaxFile5MB = 5242880;
export const EnumMaxMBFileAvatar = 3145728;

export const EnumDateTimeFormatFull = "YYYY-MM-DD HH:mm:ss";
export const EnumDateTimeFormatYYMMDD_HHMM = "YYYY-MM-DD HH:mm";
export const EnumDateTimeFormatDDMMYYYY_HHMMSS = "DD-MM-YYYY HH:mm:ss";
export const EnumDateTimeFormatYYMMDD = "YYYY-MM-DD";
export const EnumDateTimeFormatYYMM = "YYYY-MM";
export const EnumDateTimeFormatDDMMYY = "DD-MM-YYYY";
export const EnumDateTimeFormatHHMMSS = "HH:mm:ss";
export const EnumDateTimeFormatHHMM = "HH:mm";

export const EnumDateTimeFormat_Sperator_YYYMMDD_HHMM = "YYYY/MM/DD HH:mm";
export const EnumDateTimeFormat_Sperator_YYYMMDD = "YYYY/MM/DD";
export const EnumDateTimeFormat_Sperator_DDMMYYYY = "DD/MM/YYYY";
export const EnumDateTimeFormat_Sperator_DDMMYYYY_HHMM = "DD/MM/YYYY HH:mm";
export const EnumDateTimeFormat_Sperator_DDMMYYYY_HHMMSS =
  "DD/MM/YYYY HH:mm:ss";

export const EnumClientType = {
  CLIENT_WEB: 11,
  CLIENT_SUNMI: 22,
  CLIENT_IOS: 33,
  CLIENT_ANDROID: 44,
  CLIENT_WINDOWS_PHONE: 55,
};

export const EnumFolderType = {
  COMMON: {
    id: 1,
    title: "Common",
  },
  POST: {
    id: 2,
    title: "Post",
  },
  TAG: {
    id: 3,
    title: "Tag",
  },
  USER: {
    id: 4,
    title: "User",
  },
  CATEGORY: {
    id: 5,
    title: "Category",
  },
  SHOP: {
    id: 6,
    title: "Shop",
  },
};

export const EnumValidateStatus = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

export const EnumPostCollectionType = {
  URGENT: {
    id: 1,
    title: "Urgents",
    code: "urgent",
  },
  BEST_DISCOUNT: {
    id: 2,
    title: "Best discounts",
    code: "best-discount",
  },
};

export const EnumRouterMapType = {
  GROUP: {
    id: 1,
    title: "Group",
  },
  LINK: {
    id: 2,
    title: "Link",
  },
  SUB_LINK: {
    id: 3,
    title: "Sub Link",
  },
};

export const EnumProductAvailibilityType = {
  IN_STOCK: {
    id: 1,
    title: "In stock",
  },
  LOW_IN_STOCK: {
    id: 2,
    title: "Low in stock",
  },
};

export const EnumProductStatusType = {
  REQUESTED: {
    id: 1,
    tagColor: "processing",
    title: "Requested",
  },
  APPROVED: {
    id: 2,
    tagColor: "success",
    title: "Approved",
  },
  DENIED: {
    id: 3,
    tagColor: "error",
    title: "Denied",
  },
};
