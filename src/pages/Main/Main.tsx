import React, { FC, useState } from "react";
import styles from "./Main.module.scss";
import ImageNavigation from "./ImageNavigation";
import { Drawer, Typography } from "antd";

const { Title } = Typography;
import homeImgs from "../../assets/homeImgs/city.webp";
import { FireFilled } from "@ant-design/icons";
import JobCard from "../../components/JobCard";

// const jobDataArray = [
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
//   {
//     title: "网站开发工程师",
//     salary: "[7000,9000]",
//     address: "西安",
//     degree: "本科",
//     workExperience: "3-5 years",
//     workTags: ["JavaScript"],
//     companyAvatar:
//       "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
//     companyTitle: "华为",
//     companyNature: "计算机软件",
//     companyStatus: "融资",
//   },
// ];

const jobDataArray = [
  {
    title: "Java",
    address: "长沙",
    degree: "大专",
    workExperience: "1-3年",
    workTags: ["后端工程师", "全栈工程师", "架构师"],
    salary: [7000, 9000],
    salaryMonth: 0,
    companyTags: ["全勤奖", "绩效奖金", "年终奖", "补充医疗保险", "五险一金"],
    hrWork: "项目经理",
    hrName: "廖先生",
    intern: 0,
    companyTitle: "聚程创新",
    companyAvatar:
      "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
    companyNature: "计算机软件",
    companyStatus: "未融资",
    companyPeople: "[0, 20]",
    detailUrl:
      "https://www.zhipin.com/job_detail/fb63e887d93a9f871X1y2NW_F1BQ.html?lid=4dYk5eOUpIA.search.1&securityId=uAGJWMncl8Yju-n1SjNcAxaK32ZN_9qISK5f2vaTAn6McjWHvcXE_rxjhxCr5P9dNCbxml-PFSHyP-jB4sSP0PsYnFfp7AJ4LruRLMv2Ki1vvbTNZ7Tw&sessionId=",
    companyUrl:
      "https://www.zhipin.com/gongsi/41f36739e745ca331Xx_3Nu6Flc~.html",
    dist: "雨花区",
  },
  {
    title: "Java",
    address: "长沙",
    degree: "大专",
    workExperience: "1-3年",
    workTags: ["后端工程师", "全栈工程师", "架构师"],
    salary: [7000, 9000],
    salaryMonth: 0,
    companyTags: ["全勤奖", "绩效奖金", "年终奖", "补充医疗保险", "五险一金"],
    hrWork: "项目经理",
    hrName: "廖先生",
    intern: 0,
    companyTitle: "聚程创新",
    companyAvatar:
      "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
    companyNature: "计算机软件",
    companyStatus: "未融资",
    companyPeople: "[0, 20]",
    detailUrl:
      "https://www.zhipin.com/job_detail/fb63e887d93a9f871X1y2NW_F1BQ.html?lid=4dYk5eOUpIA.search.1&securityId=uAGJWMncl8Yju-n1SjNcAxaK32ZN_9qISK5f2vaTAn6McjWHvcXE_rxjhxCr5P9dNCbxml-PFSHyP-jB4sSP0PsYnFfp7AJ4LruRLMv2Ki1vvbTNZ7Tw&sessionId=",
    companyUrl:
      "https://www.zhipin.com/gongsi/41f36739e745ca331Xx_3Nu6Flc~.html",
    dist: "雨花区",
  },
  {
    title: "Java",
    address: "长沙",
    degree: "大专",
    workExperience: "1-3年",
    workTags: ["后端工程师", "全栈工程师", "架构师"],
    salary: [7000, 9000],
    salaryMonth: 0,
    companyTags: ["全勤奖", "绩效奖金", "年终奖", "补充医疗保险", "五险一金"],
    hrWork: "项目经理",
    hrName: "廖先生",
    intern: 0,
    companyTitle: "聚程创新",
    companyAvatar:
      "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
    companyNature: "计算机软件",
    companyStatus: "未融资",
    companyPeople: "[0, 20]",
    detailUrl:
      "https://www.zhipin.com/job_detail/fb63e887d93a9f871X1y2NW_F1BQ.html?lid=4dYk5eOUpIA.search.1&securityId=uAGJWMncl8Yju-n1SjNcAxaK32ZN_9qISK5f2vaTAn6McjWHvcXE_rxjhxCr5P9dNCbxml-PFSHyP-jB4sSP0PsYnFfp7AJ4LruRLMv2Ki1vvbTNZ7Tw&sessionId=",
    companyUrl:
      "https://www.zhipin.com/gongsi/41f36739e745ca331Xx_3Nu6Flc~.html",
    dist: "雨花区",
  },
  {
    title: "Java",
    address: "长沙",
    degree: "大专",
    workExperience: "1-3年",
    workTags: ["后端工程师", "全栈工程师", "架构师"],
    salary: [7000, 9000],
    salaryMonth: 0,
    companyTags: ["全勤奖", "绩效奖金", "年终奖", "补充医疗保险", "五险一金"],
    hrWork: "项目经理",
    hrName: "廖先生",
    intern: 0,
    companyTitle: "聚程创新",
    companyAvatar:
      "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
    companyNature: "计算机软件",
    companyStatus: "未融资",
    companyPeople: "[0, 20]",
    detailUrl:
      "https://www.zhipin.com/job_detail/fb63e887d93a9f871X1y2NW_F1BQ.html?lid=4dYk5eOUpIA.search.1&securityId=uAGJWMncl8Yju-n1SjNcAxaK32ZN_9qISK5f2vaTAn6McjWHvcXE_rxjhxCr5P9dNCbxml-PFSHyP-jB4sSP0PsYnFfp7AJ4LruRLMv2Ki1vvbTNZ7Tw&sessionId=",
    companyUrl:
      "https://www.zhipin.com/gongsi/41f36739e745ca331Xx_3Nu6Flc~.html",
    dist: "雨花区",
  },
  {
    title: "Java",
    address: "长沙",
    degree: "大专",
    workExperience: "1-3年",
    workTags: ["后端工程师", "全栈工程师", "架构师"],
    salary: [7000, 9000],
    salaryMonth: 0,
    companyTags: ["全勤奖", "绩效奖金", "年终奖", "补充医疗保险", "五险一金"],
    hrWork: "项目经理",
    hrName: "廖先生",
    intern: 0,
    companyTitle: "聚程创新",
    companyAvatar:
      "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
    companyNature: "计算机软件",
    companyStatus: "未融资",
    companyPeople: "[0, 20]",
    detailUrl:
      "https://www.zhipin.com/job_detail/fb63e887d93a9f871X1y2NW_F1BQ.html?lid=4dYk5eOUpIA.search.1&securityId=uAGJWMncl8Yju-n1SjNcAxaK32ZN_9qISK5f2vaTAn6McjWHvcXE_rxjhxCr5P9dNCbxml-PFSHyP-jB4sSP0PsYnFfp7AJ4LruRLMv2Ki1vvbTNZ7Tw&sessionId=",
    companyUrl:
      "https://www.zhipin.com/gongsi/41f36739e745ca331Xx_3Nu6Flc~.html",
    dist: "雨花区",
  },
  {
    title: "网站开发工程师",
    address: "长沙",
    degree: "大专",
    workExperience: "1-3年",
    workTags: ["后端工程师", "全栈工程师", "架构师"],
    salary: [7000, 9000],
    salaryMonth: 0,
    companyTags: ["全勤奖", "绩效奖金", "年终奖", "补充医疗保险", "五险一金"],
    hrWork: "项目经理",
    hrName: "廖先生",
    intern: 0,
    companyTitle: "聚程创新",
    companyAvatar:
      "https://img.bosszhipin.com/beijin/icon/894ce6fa7e58d64d57e7f22d2f3a9d18afa7fcceaa24b8ea28f56f1bb14732c0.png?x-oss-process=image/resize,w_100,limit_0",
    companyNature: "计算机软件",
    companyStatus: "未融资",
    companyPeople: "[0, 20]",
    detailUrl:
      "https://www.zhipin.com/job_detail/fb63e887d93a9f871X1y2NW_F1BQ.html?lid=4dYk5eOUpIA.search.1&securityId=uAGJWMncl8Yju-n1SjNcAxaK32ZN_9qISK5f2vaTAn6McjWHvcXE_rxjhxCr5P9dNCbxml-PFSHyP-jB4sSP0PsYnFfp7AJ4LruRLMv2Ki1vvbTNZ7Tw&sessionId=",
    companyUrl:
      "https://www.zhipin.com/gongsi/41f36739e745ca331Xx_3Nu6Flc~.html",
    dist: "雨花区",
  },
];

const Main: FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(jobDataArray[0]);

  const showDrawer = (jobData: any) => {
    setSelectedJob(jobData);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <img src={homeImgs} className={styles.homeImg} alt="" />
      <ImageNavigation />
      <Title level={2} style={{ textAlign: "center", marginTop: "20px" }}>
        热招岗位 <FireFilled style={{ color: "red" }} />
      </Title>
      <div className={styles["card-wrapper"]}>
        <div className={styles.cardContainer}>
          {jobDataArray.map((jobData, index) => (
            <div onClick={() => showDrawer(jobData)}>
              <JobCard key={index} jobData={jobData} />
            </div>
          ))}
        </div>
      </div>
      <Drawer
        title="职位详情"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={600}
      >
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <img
            src={selectedJob.companyAvatar}
            alt="公司头像"
            style={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              marginRight: "20px",
            }}
          />
          <div>
            <h3>{selectedJob.title}</h3>
            <h4>{selectedJob.companyTitle}</h4>
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong>工作地点: </strong> {selectedJob.address}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>学历要求: </strong> {selectedJob.degree}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>工作经验: </strong> {selectedJob.workExperience}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>薪资范围: </strong> {selectedJob.salary[0]} -{" "}
          {selectedJob.salary[1]} 元
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>薪资发放周期: </strong>{" "}
          {selectedJob.salaryMonth ? "每月" : "其他"}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>岗位标签: </strong> {selectedJob.workTags.join(", ")}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>公司福利: </strong> {selectedJob.companyTags.join(", ")}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>HR工作岗位: </strong> {selectedJob.hrWork}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>HR姓名: </strong> {selectedJob.hrName}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>公司性质: </strong> {selectedJob.companyNature}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>公司融资状态: </strong> {selectedJob.companyStatus}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>公司人数: </strong> {selectedJob.companyPeople}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <a
            href={selectedJob.detailUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            查看职位详情
          </a>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <a
            href={selectedJob.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            查看公司官网
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default Main;
