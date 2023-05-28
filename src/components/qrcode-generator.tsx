"use client"

import { useState } from "react"

import { QRCodeCanvas } from "qrcode.react"

import { Button } from "./ui/button"

export default function QRCodeGenerator() {
  const [linkInput, setLinkInput] = useState<string>("")

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrcode") as HTMLCanvasElement
    const dataURL = canvas.toDataURL("image/png")

    const link = document.createElement("a")
    link.href = dataURL
    link.download = "qrcode.png"
    link.dispatchEvent(new MouseEvent("click"))
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-md border bg-muted p-4">
        <QRCodeCanvas value={linkInput} id="qrcode" />
      </div>

      <input
        type="text"
        name="link"
        id="link"
        value={linkInput}
        onChange={(e) => setLinkInput(e.target.value)}
        placeholder="https://sameerjadav.me"
        className="w-full rounded-md border bg-transparent px-4 py-2 outline-none hover:bg-muted hover:placeholder:text-secondary-foreground"
      />

      <Button onClick={downloadQRCode} className="w-full">
        Download QR Code
      </Button>
    </div>
  )
}
