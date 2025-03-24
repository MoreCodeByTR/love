export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: "2024-10-6",
    title: "我们的故事开始了",
    description: "在这一天，我们相识相知，开启了人生最美好的篇章。",
    imageUrl: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    date: "2024-10-13",
    title: "江滩漫步，初见喜乐",
    description: "漫步在秋日的街头，感受着彼此的温暖。",
    imageUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    date: "2025-02-14",
    title: "我们的第一个情人节",
    description: "彼此温暖，浪漫以伴",
    imageUrl: "https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];