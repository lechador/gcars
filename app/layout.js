import "./globals.css";
import 'leaflet/dist/leaflet.css'
import 'alk-rounded-mtav-med/css/alk-rounded-mtav-med.min.css'
import 'keen-slider/keen-slider.min.css'
import Toast from "./components/toast";
import { AuthProvider } from "./AuthContext";


export const metadata = {
  title: "Gcars",
  description: "თქვენი მთავარი დანიშნულების ადგილი ავტო იმპორტში",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily: "ALK Rounded Mtav Med, sans-serif"}}>
        <AuthProvider>
          {children}
          <Toast />
        </AuthProvider>
      </body>
    </html>
  );
}
