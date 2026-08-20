import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ruihezhang.github.io"),
  title: "张蕤和 Ruihe Zhang — 数据分析·商业分析·金融风控",
  description:
    "张蕤和的个人主页：麦吉尔大学管理分析硕士，聚焦数据分析、商业分析、金融风控与机器学习工程。",
  authors: [{ name: "Ruihe Zhang", url: "https://ruihezhang.github.io" }],
  keywords: [
    "Ruihe Zhang",
    "data analytics",
    "machine learning",
    "credit risk",
    "MLOps",
    "McGill",
    "张蕤和",
    "数据分析",
    "商业分析",
    "金融风控",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "张蕤和 Ruihe Zhang — 数据分析·商业分析·金融风控",
    description: "把复杂数据，变成可验证的业务判断。",
    url: "https://ruihezhang.github.io",
    siteName: "Ruihe Zhang",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Ruihe Zhang — Analytics, made tangible" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "张蕤和 Ruihe Zhang — 数据分析·商业分析·金融风控",
    description: "把复杂数据，变成可验证的业务判断。",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f6f8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
