import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import type { OrganizeState } from "@/routes/index";

const COLORS = [
  "#6366f1",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#38bdf8",
  "#a78bfa",
  "#94a3b8",
];

export function Analytics({
  state,
}: {
  state: OrganizeState;
}) {

  const data = Object.entries(
    state.counts
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const hasData = state.total > 0;

  const fallback = [
    { name: "Images", value: 42 },
    { name: "PDFs", value: 18 },
    { name: "Videos", value: 9 },
    { name: "Music", value: 15 },
    { name: "Python", value: 22 },
    { name: "Others", value: 7 },
  ];

  const chartData =
    hasData ? data : fallback;

  return (

    <section
      id="analytics"
      className="mx-auto max-w-7xl px-4 py-16"
    >

      <SectionHeading
        eyebrow="Analytics"
       title="Smart File Analytics"

subtitle="Interactive visual insights showing categorized file statistics and organization activity."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-5">

        <div className="glass p-6 lg:col-span-2">

          <div className="flex items-center justify-between">

            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">

              Category Mix

            </h3>

          </div>

          <div className="mt-4 h-72">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >

                  {chartData.map((_, i) => (

                    <Cell
                      key={i}
                      fill={
                        COLORS[
                          i % COLORS.length
                        ]
                      }
                    />

                  ))}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="glass p-6 lg:col-span-3">

          <div className="mt-4 h-72">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart data={chartData}>

                <CartesianGrid vertical={false} />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#6366f1"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>

  );

}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {

  return (

    <div className="text-center">

<div className="text-xs uppercase tracking-[0.25em] text-emerald-400">
        {eyebrow}

      </div>

      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">

        {title}

      </h2>

      {subtitle && (

        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">

          {subtitle}

        </p>

      )}

    </div>

  );

}