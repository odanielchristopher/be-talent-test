const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error(
    "'VITE_API_URL' enviroment is required for run this project, please, add in your '.env' file",
  );
}

export const env = {
  apiUrl,
};
