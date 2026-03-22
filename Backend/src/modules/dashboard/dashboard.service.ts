export const getAdminDashboard = async () => {
  return {
    stats: {
      users: 120,
      managers: 5,
      reports: 32,
    },
    message: "Admin dashboard data",
  };
};

export const getManagerDashboard = async () => {
  return {
    stats: {
      teamMembers: 12,
      tasks: 8,
    },
    message: "Manager dashboard data",
  };
};

export const getUserDashboard = async () => {
  return {
    stats: {
      myTasks: 3,
      notifications: 7,
    },
    message: "User dashboard data",
  };
};