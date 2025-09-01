import { useState } from "react";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg"
      >
        Contáctanos
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Contáctanos</h2>
            <input type="text" placeholder="Tu nombre" className="w-full border p-2 mb-2 rounded" />
            <input type="email" placeholder="Tu email" className="w-full border p-2 mb-2 rounded" />
            <textarea placeholder="Tu mensaje" className="w-full border p-2 mb-2 rounded"></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-400 rounded">Cerrar</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Enviar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
