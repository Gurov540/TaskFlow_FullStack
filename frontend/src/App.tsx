import { useState, useEffect } from "react";
import { Button } from "./shared/ui/Button/Button";
import { Input, PasswordInput } from "./shared/ui/Input";
import { Plus, Search, Eye, Sun, Moon } from "lucide-react";

function App() {
  // Проверяем тему при первой инициализации
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Синхронизируем состояние с классом на теге <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Переключатель темы
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {/* Переключатель темы */}
      <Button
        variant="secondary"
        size="md"
        onClick={toggleTheme}
        iconLeft={theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      >
        {theme === "light" ? "Темная тема" : "Светлая тема"}
      </Button>

      <hr
        style={{
          margin: "12px 0",
          border: "none",
          borderTop: "1px solid var(--color-border)",
        }}
      />

      <Button variant="primary" size="sm">
        Save
      </Button>

      <Button variant="secondary" size="md" fullWidth>
        Cancel
      </Button>

      <Button
        variant="ghost"
        size="lg"
        iconLeft={<Plus size={18}></Plus>}
        iconRight={<Search size={18}></Search>}
      >
        Edit
      </Button>

      <Button variant="danger" fullWidth iconRight={<Plus size={18}></Plus>}>
        Delete
      </Button>

      <Button variant="ghost" size="lg" loading>
        Edit
      </Button>

      <Input
        type="password"
        label="пароль"
        inputSize="lg"
        startAdornment={<Plus size={18}></Plus>}
        endAdornment={<Eye size={18}></Eye>}
        fullWidth
      ></Input>
      <PasswordInput inputSize="sm" fullWidth></PasswordInput>
    </div>
  );
}

export default App;
