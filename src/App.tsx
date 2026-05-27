import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider, useApp } from "@/context/AppContext";
import { HomePage } from "@/pages/HomePage";
import { ServicePage } from "@/pages/ServicePage";
import { Toast } from "@/components/ui/toast";

function AppRoutes() {
  const { toast, hideToast } = useApp();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      <Toast message={toast ?? ""} open={!!toast} onClose={hideToast} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}
