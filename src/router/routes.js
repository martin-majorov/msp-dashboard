import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const StudentProfile = () => import(/* webpackChunkName: "common" */"@/pages/StudentProfile.vue");
const PostLessonsAndPayments = () => import("@/pages/PostLessonsAndPayments.vue");
const ManageLessonsForm = () => import("@/pages/ManageLessonsForm.vue");
const ManagePaymentsForm = () => import("@/pages/ManagePaymentsForm.vue");
const ManageStudentsForm = () => import("@/pages/ManageStudentsForm.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "student-profile",
        name: "student profile",
        component: StudentProfile
      },
      {
        path: "post-lessons-payments",
        name: "enter new payments and lessons",
        component: PostLessonsAndPayments
      },
      {
        path: "manage-students",
        name: "manage students",
        component: ManageStudentsForm
      },
      {
        path: "manage-payments",
        name: "manage payments",
        component: ManagePaymentsForm
      },
      {
        path: "manage-lessons",
        name: "manage lessons",
        component: ManageLessonsForm
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
