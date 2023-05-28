import QRCodeGenerator from "~/components/qrcode-generator"

export default function Home() {
  return (
    <div className="container flex flex-1 items-center justify-center">
      <QRCodeGenerator />
    </div>
  )
}
