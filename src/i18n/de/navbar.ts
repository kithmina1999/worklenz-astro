export const Navbar = {
  'navbar.list': [
    {
      title: "Funktionen",
      path: "#",
      children: [
        { title: "Zeiterfassung", path: "/time-tracking" },
        { title: "Analytik", path: "/analytics" },
        {
          title: "Ressourcenmanagement",
          path: "/resource-management",
        },
        { title: "Aufgabenmanagement", path: "/task-management" },
        { title: "Vorlagen", path: "/templates" },
      ],
    },
    {
      title: "Fähigkeiten",
      path: "#",
      children: [
        { title: "Administratoren", path: "/for-administrators" },
        { title: "Projektmanager", path: "/for-project-managers" },
        {
          title: "Teammitglieder",
          path: "/for-team-members",
        },
      ],
    },
    {
      title: "Preise",
      path: "/pricing",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ],
  'navbar.loginbtn': "Anmelden",
  'navbar.signinbtn': "Kostenlos ausprobieren",
  'navbar.githubbtn': "Geben Sie uns einen Stern auf GitHub",
}