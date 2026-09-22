export const personal = {
  name: "Leonel Katsikaris",
  role: "Fullstack Developer",
  email: "leonelkatsikaris@gmail.com",
  cv: { path: "/leonel-katsikaris-cv.pdf", available: __CV_AVAILABLE__ },
};
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/leonel-katsikaris/",
  github: "https://github.com/leokatsikaris",
};
export const navigation = ["home", "stack", "experience", "contact"] as const;
// Web compose works without a locally configured mail handler. Never sends automatically.
export const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`;
