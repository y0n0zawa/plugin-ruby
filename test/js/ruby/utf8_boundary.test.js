describe("UTF-8 handling at 8KB boundary", () => {
  test("should handle emoji at 8KB boundary without corruption", () => {
    // Create a string where emoji appears right at 8192 byte boundary
    // Each 'a' is 1 byte, emoji is 4 bytes
    const padding = "a".repeat(8190);
    const testCode = `# ${padding}\nputs "🚀 test"`;

    // The formatted result should contain the emoji, not replacement characters
    return expect(testCode).toMatchFormat();
  });

  test("should handle multiple emojis around 8KB boundary", () => {
    // Test with emojis before, at, and after 8KB boundary
    const beforeBoundary = "a".repeat(8180);
    const testCode = `# ${beforeBoundary}\n# 🎨🎭🎪🎯\nputs "test"`;

    return expect(testCode).toMatchFormat();
  });
});
