import Head from 'next/head'
import { useState } from 'react'

// Components
import DashboardLayout from '../../dashboard/components/DashboardLayout'
import DashboardSidebar from '../../dashboard/components/DashboardSidebar'
import DashboardMainContent from '../../dashboard/components/DashboardMainContent'

export default function AdminPage() {
  const workSection = {
    view: 'view-works',
    add: 'add-work',
    edit: 'edit-work',
    delete: 'delete-work',
  }
  const [activeSection, setActiveSection] = useState(workSection.view)

  return (
    <>
      <Head>
        <title>Admin dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DashboardLayout>
        <DashboardSidebar
          sectionState={{
            workSection,
            activeSection,
            setActiveSection,
          }}
        />
        <DashboardMainContent activeSection={activeSection} />
      </DashboardLayout>
    </>
  )
}
