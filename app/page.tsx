"use client";

import { useEffect, useState } from "react";

const navigation = [
  { id: "work", label: "代表项目" },
  { id: "journey", label: "经历" },
  { id: "skills", label: "能力" },
  { id: "contact", label: "联系" },
];

const metrics = [
  { value: "55%", label: "PCL 预测误差降低", note: "vs. statistical baseline" },
  { value: "130,176", label: "科研观测数据", note: "GNSS–IR observations" },
  { value: "1,100+", label: "BIXI 站点", note: "15-minute demand forecast" },
  { value: "全球第 2", label: "Scope-AI-Thon 2025", note: "community resource matching" },
];

const strengths = [
  {
    number: "01",
    title: "银行风险分析",
    english: "Risk Analytics",
    body: "能把披露数据、宏观变量、模型回测和情景分析连成可追溯工作流。",
    proof: "Scotiabank PCL 预测 · 中国农业银行信贷尽调",
  },
  {
    number: "02",
    title: "商业分析与 BI",
    english: "Business Intelligence",
    body: "从问题定义、数据口径和 KPI 设计，做到可交互报表与非技术沟通。",
    proof: "Power BI · Streamlit · Excel · 客群分层",
  },
  {
    number: "03",
    title: "机器学习工程",
    english: "ML Engineering",
    body: "关注不只是训练模型，还包括时间感知验证、可解释性、版本管理与部署。",
    proof: "Python · AWS · Docker · MLflow · FastAPI",
  },
];

const timeline = [
  {
    date: "2026.05 — 2026.08",
    organization: "麦吉尔大学地球与行星科学系",
    role: "研究助理 · 数据质量与预测分析",
    location: "蒙特利尔",
    description: "处理 GNSS–IR、潮汐、气压和气候数据，在 HPC 集群上构建可复现的北极水位研究流程。",
  },
  {
    date: "2025.09 — 2026.05",
    organization: "加拿大丰业银行 Scotiabank",
    role: "数据建模师 · 风险与财务 Co-op",
    location: "蒙特利尔",
    description: "使用 R 和 Python 做滚动回测，预测未来 8 个季度 PCL，并以 Power BI 和 Streamlit 发布风险趋势。",
  },
  {
    date: "2024.07 — 2024.08",
    organization: "中国移动江苏公司浦口分公司",
    role: "校园运营经理",
    location: "南京",
    description: "分析 500+ 校园客户的套餐和宽带需求，支持客群分层与产品组合，推动推荐套餐购买率达到 20%+。",
  },
  {
    date: "2023.01 — 2023.02",
    organization: "中国农业银行南京江北新区分行",
    role: "客户经理助理 · 公司金融",
    location: "南京",
    description: "支持 20+ 信贷客户走访和 10+ 项目贷款尽调，整理信用风险评估与金融产品匹配建议。",
  },
];

const skillGroups = [
  { title: "数据与编程", items: ["Python", "R", "SQL", "Excel", "Pandas", "scikit-learn"] },
  { title: "分析与展示", items: ["Power BI", "DAX", "Power Query", "Streamlit", "数据可视化"] },
  { title: "建模方法", items: ["时间序列", "机器学习", "滚动回测", "信用风险", "模型解释"] },
  { title: "工程与云", items: ["AWS", "Docker", "MLflow", "FastAPI", "GitHub Actions", "Linux"] },
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("work");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("enhanced");

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.05, 0.2, 0.5] },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      document.documentElement.classList.remove("enhanced");
      window.removeEventListener("scroll", updateProgress);
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ruihe.zhang@mail.mcgill.ca");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:ruihe.zhang@mail.mcgill.ca";
    }
  };

  return (
    <main>
      <div className="page-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <nav className="nav-shell" aria-label="主导航">
        <a className="wordmark" href="#top" aria-label="张蕤和个人主页">
          ZRH<span>.</span>
        </a>
        <div className="nav-center" aria-label="页面导航">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="/resume/Zhang_Ruihe_Resume_CN.pdf" download>
          下载中文简历 <span>↓</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span><i className="status-dot" /> 2027 届 · 寻找数据分析 / 商业分析 / 金融风控机会</span>
          <span className="hero-location">蒙特利尔 · 可接受国内机会</span>
        </div>

        <div className="hero-grid">
          <div className="hero-identity">
            <p className="hero-role">银行风险建模 · 商业分析 · 机器学习工程</p>
            <h1>张蕤和 <small>RUIHE ZHANG</small></h1>
            <h2>用可验证的数据结果，支持更稳健的业务决策。</h2>
            <p className="hero-summary">
              麦吉尔大学管理分析硕士，经历横跨银行信用风险、科研数据工程与 MLOps。
              能从问题定义、数据处理和建模，一直做到可解释的报告与产品交付。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">查看代表项目 <span>↓</span></a>
              <a className="button button-secondary" href="/resume/Zhang_Ruihe_Resume_CN.pdf" target="_blank">在线查看简历 <span>↗</span></a>
            </div>
          </div>

          <aside className="proof-card" aria-label="核心求职信息">
            <p className="proof-label"><i /> 招聘方快速判断</p>
            <dl>
              <div><dt>教育</dt><dd>麦吉尔大学 MMA<br /><span>GPA 3.73 / 4.00</span></dd></div>
              <div><dt>实践</dt><dd>Scotiabank<br /><span>风险与财务数据建模</span></dd></div>
              <div><dt>强项</dt><dd>分析 + 建模 + 交付<br /><span>Python · R · SQL · Power BI</span></dd></div>
              <div><dt>语言</dt><dd>中英双语<br /><span>IELTS 7.5</span></dd></div>
            </dl>
          </aside>
        </div>

        <div className="hero-evidence" aria-label="精选成果">
          {metrics.map((metric) => (
            <div key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="strengths section-shell">
        <header className="section-title reveal">
          <div><span>01</span><p>岗位匹配 / POSITIONING</p></div>
          <h2>我能解决的<br />三类问题</h2>
          <p>先说能做什么，再给可核验的经历。</p>
        </header>

        <div className="strength-grid reveal">
          {strengths.map((item) => (
            <article key={item.number}>
              <div className="card-index"><span>{item.number}</span><small>{item.english}</small></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <strong>{item.proof}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-shell">
          <header className="section-title inverse reveal">
            <div><span>02</span><p>代表项目 / SELECTED WORK</p></div>
            <h2>成果放前面，<br />方法放后面</h2>
            <p>招聘方先看结果和责任边界；技术细节可按需展开。</p>
          </header>

          <div className="case-grid">
            <article className="case-card case-feature reveal">
              <div className="case-topline"><span>01 · 金融风控</span><small>Scotiabank · 2025–2026</small></div>
              <div className="case-feature-grid">
                <div className="case-content">
                  <p className="case-role">数据建模师（风险与财务 Co-op）</p>
                  <h3>五大行 PCL<br />预测与风险报告</h3>
                  <p>自动抽取和核对银行 PDF/CSV 披露数据，滚动回测时间序列与机器学习模型，将情景预测发布为 Power BI 与 Streamlit 报告。</p>
                  <div className="case-links">
                    <a href="https://pclforecast.streamlit.app/" target="_blank" rel="noreferrer">查看在线演示 ↗</a>
                    <a href="https://github.com/Mudkipython" target="_blank" rel="noreferrer">GitHub ↗</a>
                  </div>
                </div>
                <div className="case-dashboard" aria-label="PCL 项目结果摘要">
                  <div className="dash-head"><span>FORECAST VALIDATION</span><i>R / PYTHON</i></div>
                  <strong>−55%</strong>
                  <p>MAPE 相对基线降低</p>
                  <div className="dash-bars" aria-hidden="true">
                    {[42, 57, 49, 64, 60, 74, 69, 82, 78, 91].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="dash-footer"><span>5 家加拿大银行</span><span>8 季度预测</span></div>
                </div>
              </div>
              <details>
                <summary>展开技术细节</summary>
                <p>比较 Naive、SARIMA/ARIMAX、VAR/VARMAX、正则化回归和树模型；整合 GDP、失业率、利率等宏观变量，并记录模型假设、异常与情景结果。</p>
              </details>
            </article>

            <article className="case-card reveal">
              <div className="case-topline"><span>02 · 科研数据</span><small>McGill EPS · 2026</small></div>
              <div className="case-content">
                <p className="case-role">研究助理</p>
                <h3>北极 GNSS–IR<br />海岸水位监测</h3>
                <p>融合观测、弧段文件、潮汐、气压和天气记录，以时间感知验证与可解释性筛选简洁模型。</p>
              </div>
              <div className="case-metrics"><div><strong>130,176</strong><span>五分钟观测</span></div><div><strong>434</strong><span>日度弧文件</span></div><div><strong>0.162 m</strong><span>后期保留集 RMSE</span></div></div>
              <details>
                <summary>展开技术细节</summary>
                <p>在 Alliance Canada HPC 上建立数据合同和可复现流程；比较正则化回归、树集成、GPR、EDM 和 MLP，并使用 SHAP 与排列重要性解释结果。</p>
              </details>
            </article>

            <article className="case-card reveal">
              <div className="case-topline"><span>03 · MLOps</span><small>McGill · 2026</small></div>
              <div className="case-content">
                <p className="case-role">BIXI 共享单车需求预测</p>
                <h3>从模型到<br />可恢复的云端流程</h3>
                <p>设计训练、验证、解释、注册、服务和监控链路，支持版本化模型与受控推理。</p>
              </div>
              <div className="pipeline" aria-label="BIXI MLOps 工作流">
                {["INGEST", "VALIDATE", "TRAIN", "EXPLAIN", "REGISTER", "SERVE", "MONITOR"].map((stage, index) => (
                  <span key={stage}><i>{String(index + 1).padStart(2, "0")}</i>{stage}</span>
                ))}
              </div>
              <div className="case-metrics compact"><div><strong>1,100+</strong><span>站点</span></div><div><strong>15 min</strong><span>预测颗粒度</span></div><div><strong>≈ 1</strong><span>测试集 RMSE</span></div></div>
            </article>

            <article className="case-card case-award reveal">
              <div className="case-topline"><span>04 · 负责任 AI</span><small>Scope-AI-Thon · 2025</small></div>
              <div className="award-rank"><span>GLOBAL</span><strong>#2</strong></div>
              <div className="case-content">
                <p className="case-role">社区资源智能匹配平台</p>
                <h3>让公开服务数据<br />更容易被使用</h3>
                <p>同步庇护所位置、服务供给与用户需求，生成多语言、低阅读门槛的资源指南。</p>
              </div>
              <a className="text-link" href="https://github.com/Mudkipython" target="_blank" rel="noreferrer">查看技术作品集 ↗</a>
            </article>
          </div>
        </div>
      </section>

      <section className="journey section-shell" id="journey">
        <header className="section-title reveal">
          <div><span>03</span><p>经历路线 / JOURNEY</p></div>
          <h2>同一条主线：<br />数据最终要被使用</h2>
          <p>从金融业务到科研建模，从客户需求到云端工程。</p>
        </header>

        <div className="journey-layout">
          <div className="timeline reveal">
            {timeline.map((item) => (
              <article key={`${item.date}-${item.organization}`}>
                <time>{item.date}</time>
                <div><p>{item.organization}</p><h3>{item.role}</h3><span>{item.location}</span></div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <aside className="education reveal">
            <p className="aside-label">教育背景</p>
            <article>
              <span>2025 — 2027 预计</span>
              <h3>麦吉尔大学</h3>
              <p>管理分析硕士 · Desautels</p>
              <strong>GPA 3.73 / 4.00</strong>
              <small>研究生入学奖学金</small>
            </article>
            <article>
              <span>2021 — 2025</span>
              <h3>合肥工业大学</h3>
              <p>经济学学士 · 国际经济与贸易</p>
              <strong>GPA 3.68 / 4.00</strong>
              <small>GRE 328</small>
            </article>
            <article>
              <span>交换学期</span>
              <h3>汉阳大学</h3>
              <p>英文授课交换 · 韩国</p>
              <strong>GPA 4.15 / 4.50</strong>
            </article>
          </aside>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-shell">
          <header className="section-title reveal">
            <div><span>04</span><p>能力证据 / CAPABILITIES</p></div>
            <h2>不做关键词堆叠，<br />只列用过的工具</h2>
            <p>按数据、分析、建模和工程四类展开。</p>
          </header>

          <div className="skill-grid reveal">
            {skillGroups.map((group, index) => (
              <article key={group.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>

          <div className="qualification-grid reveal">
            <article><p>证书</p><strong>Microsoft Azure Fundamentals</strong><span>AZ-900</span></article>
            <article><p>认证</p><strong>Databricks Fundamentals</strong><span>Accreditation</span></article>
            <article><p>语言</p><strong>中文母语 · 英语流利</strong><span>IELTS 7.5 · 法语基础</span></article>
            <article><p>兴趣</p><strong>中国围棋业余初段</strong><span>羽毛球 · 文学编辑</span></article>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell">
          <div className="contact-grid reveal">
            <div>
              <p><i /> 正在寻找 2027 届机会</p>
              <h2>如果岗位需要一个<br />能把分析做到交付的人。</h2>
            </div>
            <div className="contact-actions">
              <a href="mailto:ruihe.zhang@mail.mcgill.ca"><span>邮箱</span><strong>ruihe.zhang@mail.mcgill.ca</strong><b>↗</b></a>
              <button type="button" onClick={copyEmail}><span>快速操作</span><strong>{copied ? "已复制邮箱" : "复制邮箱地址"}</strong><b>{copied ? "✓" : "⎘"}</b></button>
              <a href="https://www.linkedin.com/in/ruihe-zhang-5a0707253" target="_blank" rel="noreferrer"><span>职业资料</span><strong>LinkedIn</strong><b>↗</b></a>
              <a href="https://github.com/Mudkipython" target="_blank" rel="noreferrer"><span>代码与项目</span><strong>GitHub</strong><b>↗</b></a>
            </div>
          </div>

          <div className="download-row">
            <a href="/resume/Zhang_Ruihe_Resume_CN.pdf" download>下载中文简历 <span>PDF ↓</span></a>
            <a href="/resume/Ruihe_Zhang_Resume_EN.pdf" download>Download English Resume <span>PDF ↓</span></a>
          </div>

          <footer>
            <span>© 2026 张蕤和 Ruihe Zhang</span>
            <p>数据分析 · 商业分析 · 金融风控</p>
            <a href="#top">回到顶部 ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
