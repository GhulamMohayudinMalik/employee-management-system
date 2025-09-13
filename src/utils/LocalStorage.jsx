const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare sales report",
        "description": "Compile Q3 sales data into report format",
        "date": "2025-09-15",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "description": "Email pending clients about proposals",
        "date": "2025-09-16",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Weekly sync with the marketing team",
        "date": "2025-09-17",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve authentication issue in the app",
        "date": "2025-09-15",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code review",
        "description": "Review pull request #243",
        "date": "2025-09-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update documentation",
        "description": "Add API usage examples",
        "date": "2025-09-18",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy hotfix",
        "description": "Push urgent fix to production",
        "date": "2025-09-19",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design homepage banner",
        "description": "Create graphics for September campaign",
        "date": "2025-09-15",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Logo revision",
        "description": "Update colors in company logo",
        "date": "2025-09-17",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prototype landing page",
        "description": "Build Figma prototype for new product",
        "date": "2025-09-20",
        "category": "UI/UX",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare training material",
        "description": "Slides for new hire onboarding",
        "date": "2025-09-14",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Interview candidate",
        "description": "Conduct interview for frontend role",
        "date": "2025-09-16",
        "category": "Recruitment",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update employee handbook",
        "description": "Add new remote work policies",
        "date": "2025-09-18",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Payroll review",
        "description": "Check September payroll entries",
        "date": "2025-09-20",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Organize workshop",
        "description": "Plan leadership training workshop",
        "date": "2025-09-22",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Market research",
        "description": "Analyze competitors' new features",
        "date": "2025-09-14",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare pitch deck",
        "description": "Slides for potential investors",
        "date": "2025-09-16",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Product demo",
        "description": "Schedule and deliver demo to client",
        "date": "2025-09-18",
        "category": "Client Work",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Blog post draft",
        "description": "Write article about new feature",
        "date": "2025-09-20",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  console.log(employees)
  console.log(admin)
}