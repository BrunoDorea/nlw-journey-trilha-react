import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block text-zinc-100">Reserva do AirBnB</span>
            <a href="#" className="block text-zinc-400 text-xs truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/10478811sdasdasdas3213123123123</a>
          </div>
          <Link2 className="size-5 text-zinc-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block text-zinc-100">Regras da casa</span>
            <a href="#" className="block text-zinc-400 text-xs truncate hover:text-zinc-200">https://www.notion.com/pages/1sdasdasdas3213123123123</a>
          </div>
          <Link2 className="size-5 text-zinc-400" />
        </div>
      </div>

      <button
        className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center"
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  )
}