type FileExtension = "jpg" | "png" | "pdf" | "exe";

type SafeExtension = Exclude<FileExtension, "exe">;

const uploadedFile: SafeExtension = "pdf";

console.log("Accepted extension:", uploadedFile);
