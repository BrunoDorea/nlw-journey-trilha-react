import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="">
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="block text-zinc-100">Jessica White</span>
              <span className="block text-zinc-400 text-sm truncate">jessica.white@yahoo.com</span>
            </div>
            <CircleDashed className="size-5 text-zinc-400" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="block text-zinc-100">Rita Pacocha</span>
              <span className="block text-zinc-400 text-sm truncate">rita.pacocha@yahoo.com</span>
            </div>
            <CircleCheck className="size-5 text-lime-400" />
          </div>
        </div>

        <Button variant="secondary" size="full">
          <UserCog className="size-5" />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  )
}