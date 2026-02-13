"use client";

import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import SharedCodeBlock from "./SharedCodeBlock";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`state-tabpanel-${index}`}
      aria-labelledby={`state-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function StateManagement() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Your State. Your Choice.
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Choose the state management pattern that fits your team
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
              },
            }}
          >
            <Tab label="Provider" />
            <Tab label="Riverpod" />
            <Tab label="Bloc (Coming Soon)" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              🟢 Provider Template
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              <strong>When to use:</strong> You want simplicity, familiarity,
              and quick onboarding for new Flutter developers.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Example State Management:
            </Typography>
            <SharedCodeBlock
              code={`// home_provider.dart
class HomeProvider extends ChangeNotifier {
  bool _isLoading = false;
  int _counter = 0;

  bool get isLoading => _isLoading;
  int get counter => _counter;

  void incrementCounter() {
    _counter++;
    notifyListeners(); // Manual notification
  }
}

// home_content.dart
Consumer<HomeProvider>(
  builder: (context, provider, child) {
    return Text('Counter: \${provider.counter}');
  },
)`}
              language="dart"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "0.9rem",
              }}
            />
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              🟦 Riverpod Template
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              <strong>When to use:</strong> You want compile-time safety, better
              testability, and you're building a large-scale app.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Example State Management:
            </Typography>
            <SharedCodeBlock
              code={`// home_provider.dart
class HomeState {
  final bool isLoading;
  final int counter;

  HomeState({required this.isLoading, required this.counter});

  HomeState copyWith({bool? isLoading, int? counter}) {
    return HomeState(
      isLoading: isLoading ?? this.isLoading,
      counter: counter ?? this.counter,
    );
  }
}

class HomeNotifier extends StateNotifier<HomeState> {
  HomeNotifier() : super(HomeState(isLoading: false, counter: 0));

  void incrementCounter() {
    state = state.copyWith(counter: state.counter + 1); // Immutable update
  }
}

final homeProvider = StateNotifierProvider<HomeNotifier, HomeState>((ref) {
  return HomeNotifier();
});

// home_content.dart
class HomeContent extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final homeState = ref.watch(homeProvider); // Auto-rebuild on changes
    return Column(
      children: [
        Text('Counter: \${homeState.counter}'),
        ElevatedButton(
          onPressed: () => ref.read(homeProvider.notifier).incrementCounter(),
          child: Text('Increment'),
        ),
      ],
    );
  }
}`}
            />

            <Box
              sx={{ mt: 3, p: 3, bgcolor: "background.paper", borderRadius: 2 }}
            >
              <Typography
                variant="subtitle2"
                sx={{ mb: 2, color: "primary.main", fontWeight: 600 }}
              >
                ✅ Riverpod Benefits:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                • No BuildContext needed - access providers anywhere
                <br />
                • Compile-time errors - typos caught immediately
                <br />
                • Immutable state - easier debugging with state history
                <br />
                • Auto-disposal - no memory leaks
                <br />• Better testing - use ProviderContainer for isolated
                tests
              </Typography>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box
            sx={{ maxWidth: "900px", mx: "auto", textAlign: "center", py: 8 }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              🟣 Bloc Template
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              <strong>Coming soon!</strong> Stay tuned for event-driven
              architecture with Bloc pattern support.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              When to use: You need event-driven architecture, complex business
              logic, or your team is familiar with BLoC pattern.
            </Typography>
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
}
