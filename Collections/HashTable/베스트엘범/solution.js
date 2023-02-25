function solution(genres, plays) {
  const genreMap = new Map();

  genres.forEach((genre, idx) => {
    const data = genreMap.get(genre) || { total: 0, songs: [] };
    genreMap.set(genre, {
      total: plays[idx] + data.total,
      songs: [[plays[idx], idx], ...data.songs]
        .sort((a, b) => b[0] - a[0] || a[1] - b[1])
        .slice(0, 2),
    });
  });

  console.log(
    [...genreMap.entries()]
      .sort((a, b) => b[1].total - a[1].total)
      .flatMap((v) => v[1].songs)
      .map((v) => v[1])
  );
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
