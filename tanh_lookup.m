function []=tanh_lookup()
    problem = FunctionApproximation.Problem('tanh');
    problem.InputTypes =  numerictype(1,8,7);
    problem.InputLowerBounds = -5;
    problem.InputUpperBounds = 5;
    problem.OutputType = numerictype(1,8,7);
    problem.Options.BreakpointSpecification='EvenSpacing';
    problem.Options.WordLengths=8; %[8, 16, 32]
    problem.Options.OnCurveTableValues=1;
    solution = solve(problem);
    compare(solution);
    approximate(solution);
    memory = totalmemoryusage(solution);
    disp(memory);
end