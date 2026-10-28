import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";

import { departments } from "../../data/departments";

import TechnologyDigital from "./TechnologyDigital";
import HealthNutrition from "./HealthNutrition";
import AgricultureFood from "./AgricultureFood";
import EducationSkills from "./EducationSkills";
import BusinessEnterprise from "./BusinessEnterprise";
import ResearchDataIntelligence from "./ResearchDataIntelligence";
import FinanceInvestment from "./FinanceInvestment";
import MediaCommunication from "./MediaCommunication";
import LogisticsDistribution from "./LogisticsDistribution";
import CommunityDevelopment from "./CommunityDevelopment";
import RealEstateInfrastructure from "./RealEstateInfrastructure";
import InnovationStrategy from "./InnovationStrategy";

const departmentPages = {
  technology: TechnologyDigital,
  health: HealthNutrition,
  agriculture: AgricultureFood,
  education: EducationSkills,
  business: BusinessEnterprise,
  research: ResearchDataIntelligence,
  finance: FinanceInvestment,
  media: MediaCommunication,
  logistics: LogisticsDistribution,
  community: CommunityDevelopment,
  "real-estate": RealEstateInfrastructure,
  innovation: InnovationStrategy,
};

function DepartmentPlaceholder({ department }) {
  return (
    <main className="section">
      <div className="container">
        <Link to="/departments" className="btn btn-secondary">
          <ArrowLeft size={18} />
          Back to Departments
        </Link>

        <div className="department-placeholder">
          <Construction size={42} />

          <p className="eyebrow">GBC DEPARTMENT</p>

          <h1>{department.name}</h1>

          <p>{department.description}</p>

          <h2>Page Under Development</h2>

          <p>
            We are preparing this department's dedicated page. Please check back
            soon for more information about its focus areas, services,
            initiatives, and opportunities.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Contact Golden Bridge Concept
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function DepartmentDetail() {
  const { slug } = useParams();

  const department = departments.find((item) => item.slug === slug);

  if (!department) {
    return (
      <main className="section">
        <div className="container">
          <h1>Department Not Found</h1>
          <p>The department you are looking for does not exist.</p>

          <Link to="/departments" className="btn btn-primary">
            View All Departments
          </Link>
        </div>
      </main>
    );
  }

  const DepartmentPage = departmentPages[department.slug];

  if (!DepartmentPage) {
    return <DepartmentPlaceholder department={department} />;
  }

  return <DepartmentPage department={department} />;
}
