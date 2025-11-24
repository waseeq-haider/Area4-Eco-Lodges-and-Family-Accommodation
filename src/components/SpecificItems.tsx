import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    number: 31,
    title: "10 ECO-LODGE CABINS",
    description: "Eco-friendly cabins designed for families and groups, each with 4 beds. Features modern amenities including solar panels, AC, and Wi-Fi while maintaining sustainable practices and natural aesthetics."
  },
  {
    title: "RAINWATER COLLECTION TANKS",
    description: "50,000L rainwater collection system providing sustainable water management for all lodge facilities. Integrated seamlessly into the landscape design."
  },
  {
    title: "SOLAR ARRAY & BATTERY STORAGE",
    description: "Comprehensive solar power system with battery storage ensuring energy independence. Powers all cabins with clean, renewable energy."
  },
  {
    title: "PRIVATE GARDENS & DECKING",
    description: "Each cabin features private garden spaces with native plantings and timber decking. Outdoor areas designed for relaxation and connection with nature."
  }
];

export const SpecificItems = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Specific Items</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {item.number && (
                  <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                    Item {item.number}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
