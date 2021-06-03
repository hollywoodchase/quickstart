<template>
  <div>
    <ejs-gantt
      ref="gantt"
      id="GanttContainer"
      :onTaskbarClick="taskbarClicked"
      :dataSource="data"
      :dataBound="dataBound"
      :taskFields="taskFields"
      :height="height"
      :toolbar="toolbar"
    ></ejs-gantt>
    <mps-event-detail> </mps-event-detail>
    <data-view/>
    <api-view/>
  </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from "./data-source.js";
import MpsEventDetail from "./components/MpsEventDetail.vue";
import DataView from "./components/DataView";
import ApiView from "./components/ApiView.vue"

let customZoomingLevels = [
  {
    topTier: { unit: "Month", format: "MMM, yy", count: 1 },
    bottomTier: { unit: "Week", format: "dd", count: 1 },
    timelineUnitSize: 33,
    level: 0,
    timelineViewMode: "Month",
    weekStartDay: 0,
    updateTimescaleView: true,
    weekendBackground: null,
    showTooltip: true
  },
  {
    topTier: { unit: "Month", format: "MMM, yyyy", count: 1 },
    bottomTier: { unit: "Week", format: "dd MMM", count: 1 },
    timelineUnitSize: 66,
    level: 1,
    timelineViewMode: "Month",
    weekStartDay: 0,
    updateTimescaleView: true,
    weekendBackground: null,
    showTooltip: true
  },
  {
    topTier: { unit: "Month", format: "MMM, yyyy", count: 1 },
    bottomTier: { unit: "Week", format: "dd MMM", count: 1 },
    timelineUnitSize: 99,
    level: 2,
    timelineViewMode: "Month",
    weekStartDay: 0,
    updateTimescaleView: true,
    weekendBackground: null,
    showTooltip: true
  },
  {
    topTier: { unit: "Week", format: "MMM dd, yyyy", count: 1 },
    bottomTier: { unit: "Day", format: "d", count: 1 },
    timelineUnitSize: 33,
    level: 3,
    timelineViewMode: "Week",
    weekStartDay: 0,
    updateTimescaleView: true,
    weekendBackground: null,
    showTooltip: true
  },
  {
    topTier: { unit: "Week", format: "MMM dd, yyyy", count: 1 },
    bottomTier: { unit: "Day", format: "d", count: 1 },
    timelineUnitSize: 66,
    level: 4,
    timelineViewMode: "Week",
    weekStartDay: 0,
    updateTimescaleView: true,
    weekendBackground: null,
    showTooltip: true
  },
  {
    topTier: { unit: "Day", format: "E dd yyyy", count: 1 },
    bottomTier: { unit: "Hour", format: "hh a", count: 12 },
    timelineUnitSize: 66,
    level: 5,
    timelineViewMode: "Day",
    weekStartDay: 0,
    updateTimescaleView: true,
    weekendBackground: null,
    showTooltip: true
  },
  {
    topTier: { unit: "Day", format: "E dd yyyy", count: 1 },
    bottomTier: { unit: "Hour", format: "hh a", count: 6 },
    timelineUnitSize: 99,
    level: 6,
    timelineViewMode: "Day",
    weekStartDay: 0,
    updateTimescaleView: true,
    weekendBackground: null,
    showTooltip: true
  }
];
Vue.use(GanttPlugin);
export default {
  components: {
    MpsEventDetail, DataView, ApiView
  },
  methods: {
    taskbarClicked: function(event) {
      this.$store.dispatch("eventSelected", event.data);
      this.$store.dispatch("apiSelected");
    }
  },
  data: function() {
    return {
      data: projectNewData,
      height: "450px",
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        child: "subtasks"
      },
      timelineSettings: {
        timelineViewMode: "Day"
      },
      toolbar: ["ZoomIn", "ZoomOut", "ZoomToFit"],
      dataBound: function() {
        var ganttObj = document.getElementById("GanttContainer")
          .ej2_instances[0];
        ganttObj.zoomingLevels = customZoomingLevels;
      }
    };
  },
  provide: {
    gantt: [Toolbar]
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>
