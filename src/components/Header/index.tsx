const links = [
  {
    link: "#main",
    name: "О нас",
  },
  {
    link: "#video",
    name: "Рекламный ролик",
  },
  {
    link: "#contacts",
    name: "Контакты",
  },
];

export const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          opacity: .8,
          padding: "20px 12px",
          display: "flex",
          gap: 20,
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        {links.map((link) => (
          <a
            key={link.link}
            href={link.link}
            style={{ color: "#599ba4", fontSize: 24, fontWeight: 600 }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};
