import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

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

        <button
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center"
        >
          <UserCog className="size-5" />
          Gerenciar convidados
        </button>
      </div>
    </div>
  )
}