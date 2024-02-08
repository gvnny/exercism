/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const Visitor = {
    name: name,
    age: age,
    ticketId: ticketId
  };
  
  return Visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  if (visitor.ticketId !== null) {
    visitor.ticketId = null;
    return visitor;
  } else {
    return visitor;
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {

  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  }
  if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return "sold to " + tickets[ticketId];
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null || tickets[ticketId] === undefined) {
    return "invalid ticket !!!";
  } else {
    return tickets[ticketId]
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if (visitor.gtc?.version === null || visitor.gtc?.version === undefined) {
    return;
  } else {
    return visitor.gtc.version ;
  }
}
