export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/x-icon" href="../public/ghost.ico" />
      </head>
      <title>GamePad</title>
      <body>{children}</body>
    </html>
  );
}
