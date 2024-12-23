export const Navbar = {
  'navbar.list': [
    {
      title: "Recursos",
      path: "#",
      children: [
        { title: "Rastreamento de Tempo", path: "/time-tracking" },
        { title: "Análises", path: "/analytics" },
        {
          title: "Gestão de Recursos",
          path: "/resource-management",
        },
        { title: "Gestão de Tarefas", path: "/task-management" },
        { title: "Modelos", path: "/templates" },
      ],
    },
    {
      title: "Capacidades",
      path: "#",
      children: [
        { title: "Administradores", path: "/for-administrators" },
        { title: "Gerentes de Projeto", path: "/for-project-managers" },
        {
          title: "Membros da Equipe",
          path: "/for-team-members",
        },
      ],
    },
    {
      title: "Preços",
      path: "/pricing",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ],
  'navbar.loginbtn': "Inscrever-se",
  'navbar.signinbtn': "Experimente Grátis",
  'navbar.githubbtn': "Dê uma estrela no GitHub",
}