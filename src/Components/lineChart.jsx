import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';

const LineChart = ({ data }) => {
    const svgRef = useRef(null);

    useEffect(() => {

        // select first element 
        const svg = d3.select(svgRef.current);

        // set width and height
        const { width, height } = svgRef.current.getBoundingClientRect();

        // Add margin
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        // Max Income
        const maxIncome = d3.max(data, d => d.Income)

        // Max Expense
        const maxExpense = d3.max(data, d => d.Expense)

        // Max in both(Income, expense) for domain
        const domain = d3.max([maxIncome, maxExpense]);

        // clear previous render
        svg.selectAll('*').remove();

        // Domain: set of all input values
        // Range: set of possible output values

        // scaleTime() used for scale date or time and d3.extent return [min , max]
        // Maps the minimum and maximum dates in the data array to the range of positions from the left margin to the right margin of the SVG.
        // This scale can then be used to position elements (such as lines or circles) on the x-axis based on their date values, ensuring that dates are spaced proportionally according to their actual time intervals.
        const x = d3.scaleTime().domain(d3.extent(data, d => d.date)).range([margin.left, width - margin.right]);

        // scaleLinear used for numerical values, d3.max will return maximum value in data and .nice() will used for rounding a number
        // Maps the range of values from 0 to the maximum value in the data array to the vertical range from the bottom to the top of the SVG.
        // This scale can then be used to position elements(such as lines or circles) on the y - axis based on their numerical values, ensuring that the height of the elements corresponds proportionally to their value.
        const y = d3.scaleLinear().domain([0, domain]).nice().range([height - margin.bottom, margin.top]);

        //defines a function to create and render the x-axis of the chart using D3. g is a single argument used as group element.
        // d3.axisBottom add scale on x-axis
        // create x-axis
        const xAxis = g => g.attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

        // Append x-Axis
        svg.append("g").call(xAxis);

        // Create y-axis
        const yAxis = g => g.attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y))
            .call(g => g.append("text")
                .attr("x", -30)
                .attr("y", 10)
                .attr("fill", "#022c22")
                .attr("text-anchor", "start")
                .text("value")
            )

        // Append y-axis
        svg.append("g").call(yAxis);

        // Create and append line path to Expenses
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "Red")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(d => x(d.date))
                .y(d => y(d.Expense))
                .curve(d3.curveCatmullRom.alpha(0.5)));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(d => x(d.date))
                .y(d => y(d.Income))
                .curve(d3.curveCatmullRom.alpha(0.5)));

    }, [data]);
    return <>
        <svg ref={svgRef} className="m-10 w-102 h-101 rounded-2xl shadow-lg shadow-teal-700" />
    </>
}

export default LineChart;