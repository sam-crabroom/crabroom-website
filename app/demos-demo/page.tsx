import Home from "@/components/Home";
import { MantineProvider } from "@mantine/core";
import Footer from "@/components/ui/footer";

export default function Main() {
  return (
    <MantineProvider>
      <Home />
      <Footer />
    </MantineProvider>
  );
}
