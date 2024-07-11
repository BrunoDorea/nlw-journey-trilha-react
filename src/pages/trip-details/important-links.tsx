import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Link {
  title: string
  url: string
}

export function ImportantLinks() {
  const { tripId } = useParams()
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {links.map(link => {
          return (
            <div key={link.title} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block text-zinc-100">{link.title}</span>
                <a href={link.url} className="block text-zinc-400 text-xs truncate hover:text-zinc-200">{link.url}</a>
              </div>
              <Link2 className="size-5 text-zinc-400" />
            </div>
          )
        })}
      </div>

      <Button variant='secondary' size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div >
  )
}