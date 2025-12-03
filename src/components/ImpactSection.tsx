import { TrendingUp, Leaf, Recycle, Droplets, Zap, TreePine } from "lucide-react";

const metrics = [
  {
    icon: Leaf,
    value: "2.5M",
    unit: "ton",
    label: "CO₂ Evitadas",
    description: "Emissões de carbono evitadas através das conexões da plataforma",
    trend: "+34%",
  },
  {
    icon: Recycle,
    value: "850K",
    unit: "ton",
    label: "Resíduos Reciclados",
    description: "Material desviado de aterros através de economia circular",
    trend: "+28%",
  },
  {
    icon: Droplets,
    value: "12B",
    unit: "L",
    label: "Água Economizada",
    description: "Recursos hídricos preservados com tecnologias de reuso",
    trend: "+41%",
  },
  {
    icon: Zap,
    value: "340",
    unit: "GWh",
    label: "Energia Renovável",
    description: "Capacidade de energia limpa implementada",
    trend: "+52%",
  },
];

const ImpactSection = () => {
  return (
    <section id="impacto" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary-foreground/30 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary-foreground/30 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-4">
            Impacto Mensurável
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Resultados que Transformam
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Cada conexão na plataforma gera impacto real e rastreável. 
            Acompanhe os resultados agregados do ecossistema.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-primary-foreground/90">
                  <TrendingUp className="w-4 h-4" />
                  {metric.trend}
                </div>
              </div>

              <div className="mb-2">
                <span className="font-display font-bold text-4xl text-primary-foreground">
                  {metric.value}
                </span>
                <span className="text-lg text-primary-foreground/70 ml-1">
                  {metric.unit}
                </span>
              </div>

              <h3 className="font-semibold text-primary-foreground mb-1">
                {metric.label}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* ESG Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
            <TreePine className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-medium">
              Dados verificados e auditáveis para relatórios ESG
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
