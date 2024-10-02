function displayPage(DashboardPages) {
  if (DashboardPages.length === 1) {
    switch (DashboardPages[0]) {
      case 'settings':
        return <span>Dashboard/Setting</span>;
      case 'profile':
        return <span>Dashboard/Profile</span>;
      default:
        return  <span>404 Error Page not Found | {DashboardPages[0]} |</span>;
    }
  } else if (DashboardPages.length === 2) {
    switch (DashboardPages[1]) {
      case 'destroy':
        return <span>Dashboard/Setting/Destroy</span>;
      case 'edit':
        return <span>Dashboard/Setting/Edit</span>;
      default:
        return <span>404 Error Page not Found | {DashboardPages[0]}/{DashboardPages[1]} | </span>;
    }
  } else if (DashboardPages.length === 3) {
    switch (DashboardPages[2]) {
      case 'confirm':
        return <span>Dashboard/Setting/Destroy/Confirm</span>;
      case 'cancel':
        return <span>Dashboard/Setting/Destroy/Cancel</span>;
      default:
        return <span>404 Error Page not Found | Dashboard/{DashboardPages[0]}/{DashboardPages[1]}/{DashboardPages[2]} | </span>;
    }
  } else {
    return <span>Dashboard</span>;
  }
}

export default function DashboardPages({ params }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {displayPage(params.DashboardPages)}
      </main>
    </div>
  );
}