import { Button } from "@views/components/ui/button";
import { Input } from "@views/components/ui/input";

export function CreateUser() {
  return (
    <div>
      <br />
      <Input placeholder="Nome do usuário" />
      <Button>Adicionar usuário</Button>
    </div>
  )
}