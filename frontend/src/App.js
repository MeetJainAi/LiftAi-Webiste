import "@/App.css";
import LandingPage from "@/pages/LandingPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <LandingPage />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#171717',
            color: '#F0EDE8',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '9999px',
            fontSize: '14px',
          },
        }}
      />
    </>
  );
}

export default App;
