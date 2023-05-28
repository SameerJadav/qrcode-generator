"use client"

import { useState } from "react"

import { QRCodeCanvas } from "qrcode.react"

import { Icons } from "./icons"
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
    <div className="my-6 flex flex-col items-center rounded-md shadow-md">
      <div className="rounded-t-md border-x border-t p-4 md:p-6">
        <div className="5 flex flex-col items-start gap-1">
          <label htmlFor="link" className="font-medium text-primary">
            Website URL
          </label>
          <input
            type="text"
            name="link"
            id="link"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            placeholder="https://sameerjadav.me"
            className="w-full rounded-md border bg-transparent px-4 py-2 outline-none hover:bg-muted hover:placeholder:text-secondary-foreground"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-4 rounded-b-md border bg-muted p-4 md:p-6">
        <div className="rounded-md border bg-background p-4">
          <QRCodeCanvas value={linkInput} id="qrcode" />
        </div>

        <Button
          onClick={downloadQRCode}
          className="flex w-full items-center gap-2"
        >
          <Icons.download className="h-6 w-6" />
          <span>Download QR Code</span>
        </Button>
      </div>
    </div>
  )
}
