import { useEffect } from "react";

const Chatbot: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).chtlConfig = { chatbotId: "6183182499" };

      const script = document.createElement("script");
      script.async = true;
      script.dataset.id = "6183182499";
      script.id = "chatling-embed-script";
      script.type = "text/javascript";
      script.src = "https://chatling.ai/js/embed.js";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null; // No UI needed, only loads the script
};

export default Chatbot;
