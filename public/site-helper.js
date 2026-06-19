const siteConfig = {
  baseUrl: "https://website-main-aoke.com",
  keyword: "aoke",
  cardTitle: "欢迎访问 Aoke 服务",
  cardContent: "本页面提供快捷入口与使用说明。",
  badges: ["aoke", "指南", "提示", "关键词"],
  tipList: [
    "点击徽章可复制对应关键词",
    "卡片内容可自行配置",
    "使用 Ctrl+D 收藏本站"
  ]
};

function buildCard() {
  const card = document.createElement("div");
  card.className = "site-helper-card";
  card.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 280px;
    background: #ffffff;
    border: 1px solid #d0d0d0;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
    font-family: sans-serif;
    font-size: 14px;
    z-index: 9999;
    padding: 16px;
  `;

  const title = document.createElement("h3");
  title.textContent = siteConfig.cardTitle;
  title.style.margin = "0 0 8px 0";
  title.style.fontSize = "16px";
  title.style.color = "#333";
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = siteConfig.cardContent;
  desc.style.margin = "0 0 12px 0";
  desc.style.color = "#666";
  card.appendChild(desc);

  const badgeContainer = document.createElement("div");
  badgeContainer.style.marginBottom = "12px";
  siteConfig.badges.forEach(word => {
    const badge = document.createElement("span");
    badge.textContent = word;
    badge.style.cssText = `
      display: inline-block;
      margin: 2px 4px 2px 0;
      padding: 4px 8px;
      background: #eef2ff;
      border-radius: 12px;
      font-size: 12px;
      color: #3b4a6b;
      cursor: pointer;
      border: 1px solid #cbd5e1;
    `;
    badge.addEventListener("click", function() {
      navigator.clipboard.writeText(word).catch(() => {});
    });
    badgeContainer.appendChild(badge);
  });
  card.appendChild(badgeContainer);

  const tipList = document.createElement("ul");
  tipList.style.margin = "0";
  tipList.style.paddingLeft = "20px";
  tipList.style.color = "#555";
  siteConfig.tipList.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    li.style.marginBottom = "4px";
    tipList.appendChild(li);
  });
  card.appendChild(tipList);

  const linkInfo = document.createElement("div");
  linkInfo.style.marginTop = "12px";
  linkInfo.style.fontSize = "12px";
  linkInfo.style.color = "#999";
  linkInfo.innerHTML = `服务地址：<a href="${siteConfig.baseUrl}" target="_blank" style="color:#3b82f6;text-decoration:none;">${siteConfig.baseUrl}</a>`;
  card.appendChild(linkInfo);

  return card;
}

function initSiteHelper() {
  if (document.querySelector(".site-helper-card")) return;
  const card = buildCard();
  document.body.appendChild(card);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteHelper);
} else {
  initSiteHelper();
}