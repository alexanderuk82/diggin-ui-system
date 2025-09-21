module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(ts|tsx)",
    "<rootDir>/src/**/?(*.)(test|spec).(ts|tsx)"
  ],
  collectCoverageFrom: [
    "src/**/*.(ts|tsx)",
    "!src/**/*.stories.(ts|tsx)",
    "!src/**/*.d.ts",
    "!src/setupTests.ts"
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "src/stories/", "src/tokens/"],
  coverageReporters: ["text", "lcov", "html"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"]
}
