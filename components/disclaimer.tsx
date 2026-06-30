import { AlertTriangle } from "lucide-react"

export default function Disclaimer() {
  return (
    <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-t border-amber-600/30 py-3 px-4 md:py-4">
      <div className="container mx-auto">
        <div className="flex items-start gap-2 md:gap-3 text-amber-200/80 text-xs md:text-sm">
          <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="leading-tight md:leading-relaxed">
            Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone wyłącznie
            dla osób w regionach, gdzie hazard online jest legalny. Użytkownicy są odpowiedzialni za zgodność z
            lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.
          </p>
        </div>
      </div>
    </div>
  )
}
