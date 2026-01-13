// src/App.js

import { useState } from "react";
import ModeToggle from "./ui/ModeToggle";
import roles from "./config/roles";
import roleCategories from "./config/roleCategories";
import tasks from "./config/tasks";
import dependencyLevels from "./config/dependencyLevels";
import platforms from "./config/platforms";

import {
  businessTypes,
  businessStages,
  budgetRanges,
  targetAudiences
} from "./config/businessOptions";

import SearchableSelect from "./ui/SearchableSelect";
import GenerateButton from "./ui/GenerateButton";
import PromptPreview from "./ui/PromptPreview";
import TextArea from "./ui/TextArea";

import { generatePrompt } from "./engine/promptEngine";
import { generateBusinessPrompt } from "./engine/businessPromptEngine";

function App() {
  // Mode state
  const [mode, setMode] = useState("prompt");

  // Prompt Generator state
  const [roleCategoryId, setRoleCategoryId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [taskId, setTaskId] = useState("");
  const [dependencyLevelId, setDependencyLevelId] = useState("");
  const [platformId, setPlatformId] = useState("");
  const [userContext, setUserContext] = useState("");

  // Business Planner state
  const [businessType, setBusinessType] = useState("");
  const [businessStage, setBusinessStage] = useState("");
  const [budget, setBudget] = useState("");
  const [audience, setAudience] = useState("");
  const [businessContext, setBusinessContext] = useState("");

  // Generated prompt
  const [prompt, setPrompt] = useState("");

  // ----- Prompt Generator -----
  const handleGenerate = () => {
    if (!roleCategoryId || !roleId || !taskId || !dependencyLevelId || !platformId) {
      alert("Please select all options!");
      return;
    }

    const selectedRole =
      roles[roleCategoryId]?.find(r => r.value === roleId)?.label || "";

    const selectedTask =
      tasks.find(t => t.value === taskId)?.label || "";

    const selectedDependency =
      dependencyLevels.find(d => d.value === dependencyLevelId)?.label || "";

    const selectedPlatform =
      platforms.find(p => p.value === platformId)?.label || "";

    const generatedPrompt = generatePrompt({
      role: selectedRole,
      task: selectedTask,
      dependency: selectedDependency,
      platform: selectedPlatform,
      context: userContext
    });

    setPrompt(generatedPrompt);
  };

  // ----- Business Planner -----
  const handleBusinessGenerate = () => {
    if (!businessType || !businessStage || !budget || !audience) {
      alert("Please fill all business details");
      return;
    }

    const generatedPrompt = generateBusinessPrompt({
      businessType,
      businessStage,
      budget,
      audience,
      context: businessContext
    });

    setPrompt(generatedPrompt);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Mode Toggle */}
      <ModeToggle mode={mode} setMode={setMode} />

      <h1>AI Prompt Orchestrator</h1>

      {/* ----- PROMPT GENERATOR UI ----- */}
      {mode === "prompt" && (
        <>
          <SearchableSelect
            label="Select Role Category"
            options={roleCategories}
            value={roleCategoryId}
            onChange={(value) => {
              setRoleCategoryId(value);
              setRoleId(""); // reset role when category changes
            }}
          />

          <SearchableSelect
            label="Select Role"
            options={roleCategoryId ? roles[roleCategoryId] : []}
            value={roleId}
            onChange={setRoleId}
          />

          <SearchableSelect
            label="Select Task Type"
            options={tasks}
            value={taskId}
            onChange={setTaskId}
          />

          <SearchableSelect
            label="Select Dependency Level"
            options={dependencyLevels}
            value={dependencyLevelId}
            onChange={setDependencyLevelId}
          />

          <SearchableSelect
            label="Select Platform"
            options={platforms}
            value={platformId}
            onChange={setPlatformId}
          />

          <TextArea
            label="Describe your problem or idea"
            value={userContext}
            onChange={setUserContext}
          />
        </>
      )}

      {/* ----- BUSINESS PLANNER UI ----- */}
      {mode === "business" && (
        <>
          <SearchableSelect
            label="Business Type"
            options={businessTypes}
            value={businessType}
            onChange={setBusinessType}
          />

          <SearchableSelect
            label="Business Stage"
            options={businessStages}
            value={businessStage}
            onChange={setBusinessStage}
          />

          <SearchableSelect
            label="Budget Range"
            options={budgetRanges}
            value={budget}
            onChange={setBudget}
          />

          <SearchableSelect
            label="Target Audience"
            options={targetAudiences}
            value={audience}
            onChange={setAudience}
          />

          <TextArea
            label="Describe your business & goals"
            value={businessContext}
            onChange={setBusinessContext}
          />
        </>
      )}

      {/* ----- SINGLE GENERATE BUTTON & PROMPT PREVIEW ----- */}
      <GenerateButton
        onClick={mode === "prompt" ? handleGenerate : handleBusinessGenerate}
      />

      <PromptPreview prompt={prompt} />
    </div>
  );
}

export default App;
