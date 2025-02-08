import React from "react";
import styles from "./JobCard.module.scss";

interface JobData {
  title: string;
  salary: number[];
  address: string;
  degree: string;
  workExperience: string;
  workTags: string[];
  companyAvatar: string;
  companyTitle: string;
  companyNature: string;
  companyStatus: string;
}

interface JobCardProps {
  jobData: JobData;
}

const JobCard: React.FC<JobCardProps> = ({ jobData }) => {
  return (
    <div className={styles.card}>
      {/* 岗位信息 */}
      <div className={styles.header}>
        <h2 className={styles.title}>{jobData.title}</h2>
        <span className={styles.salary}>
          {jobData.salary[0]} - {jobData.salary[1]} 元
        </span>
      </div>
      {/* 详细要求 */}
      <div className={styles.details}>
        <span className={styles.tag}>{jobData.address}</span>
        <span className={styles.tag}>{jobData.degree}</span>
        <span className={styles.tag}>{jobData.workExperience}</span>
        <span
          style={{
            backgroundColor: "#e3f2fd",
            color: "#1976d2",
          }}
          className={styles.tag}
        >
          {jobData.workTags[0]}
        </span>
      </div>

      {/* 公司信息 */}
      <div className={styles.company}>
        <div className={styles["company-info"]}>
          <img
            src={jobData.companyAvatar}
            alt="Company Logo"
            className={styles["company-avatar"]}
          />
          <span className={styles["company-title"]}>
            {jobData.companyTitle}
          </span>
        </div>
        <div className={styles["company-details"]}>
          <span>{jobData.companyNature}</span>
          <span> | {jobData.companyStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
