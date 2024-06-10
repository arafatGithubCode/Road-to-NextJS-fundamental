import { ClientComOne } from "@/components/Client-com-one";
import { ServerComOne } from "@/components/Server-com-one";

export default function InterleavingPage() {
  return (
    <>
      <h2>Interleaving page</h2>;
      <ClientComOne>
        <ServerComOne />
      </ClientComOne>
    </>
  );
}
