"use client"

import { useState } from "react"

import { QRCodeCanvas } from "qrcode.react"
import { HexColorPicker } from "react-colorful"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function QRCodeGenerator() {
  const [linkInput, setLinkInput] = useState<string>("")
  const [fgColor, setFgColor] = useState<string>("#000000")

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrcode") as HTMLCanvasElement
    const dataURL = canvas.toDataURL("image/png")

    const link = document.createElement("a")
    link.href = dataURL
    link.download = "qrcode.png"
    link.dispatchEvent(new MouseEvent("click"))
  }

  return (
    <div className="my-6 flex flex-col items-center gap-4">
      <div className="rounded-md border bg-muted p-4">
        <QRCodeCanvas value={linkInput} id="qrcode" fgColor={fgColor} />
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex w-full items-center gap-2">
            <Icons.colorPalette className="h-6 w-6" />
            <span>Foreground Color</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4">
          <HexColorPicker color={fgColor} onChange={setFgColor} />
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        onClick={downloadQRCode}
        className="flex w-full items-center gap-2"
      >
        <Icons.download className="h-6 w-6" />
        <span>Download QR Code</span>
      </Button>
    </div>
  )
}
